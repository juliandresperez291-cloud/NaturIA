export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { image, mimeType } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No se recibió ninguna imagen' });
    }

    const tradingPrompt = `Eres un analista técnico de trading de nivel institucional con más de 20 años de experiencia en mercados financieros. Analiza este gráfico con máximo rigor y detalle profesional.

Estructura tu análisis EXACTAMENTE en estas secciones con estos encabezados:

📊 TENDENCIA GENERAL
Identifica la tendencia principal (alcista, bajista o lateral). Describe la estructura de máximos y mínimos. Indica la fuerza y madurez de la tendencia. Menciona el timeframe visible.

🎯 SOPORTE Y RESISTENCIA
Lista los niveles de soporte clave con precios aproximados si son visibles. Lista los niveles de resistencia clave. Identifica zonas de consolidación. Señala el soporte/resistencia más crítico del momento.

🔍 PATRONES IDENTIFICADOS
Nombra todos los patrones técnicos visibles (cabeza y hombros, triángulos, banderas, cuñas, doble techo/suelo, velas japonesas relevantes, etc.). Indica si están completos o en formación. Evalúa la fiabilidad de cada patrón.

📈 INDICADORES Y SEÑALES
Analiza el volumen si es visible. Identifica divergencias. Comenta el momentum general. Evalúa condiciones de sobrecompra/sobreventa.

✅ RECOMENDACIÓN DE ENTRADA
Señala el punto de entrada óptimo con justificación técnica. Indica si es momento de compra, venta o espera. Especifica condiciones que confirmarían la entrada.

🎯 OBJETIVOS DE PRECIO
Define el primer objetivo (TP1) con razonamiento. Define el segundo objetivo (TP2). Explica la proyección basada en el análisis.

🛑 GESTIÓN DE RIESGO
Indica el nivel de stop loss sugerido. Calcula la relación riesgo/beneficio aproximada. Da recomendaciones de gestión de posición.

⚠️ ADVERTENCIA FINAL
Recuerda que este análisis es educativo e informativo. El trading conlleva riesgo de pérdida de capital. Siempre usa gestión de riesgo apropiada.

Responde en español. Sé específico, técnico y profesional.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.2-90b-vision-preview',
        max_tokens: 3000,
        temperature: 0.2,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType || 'image/jpeg'};base64,${image}`,
                },
              },
              {
                type: 'text',
                text: tradingPrompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Error Groq Vision:', err);
      return res.status(response.status).json({ error: 'Error al analizar la imagen' });
    }

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || 'No se pudo analizar el gráfico.';

    return res.status(200).json({ analysis });

  } catch (error) {
    console.error('Error interno:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
