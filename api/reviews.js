// Função serverless da Vercel: busca nota e avaliações da ElaClean na Google Places API (New).
// Variáveis de ambiente necessárias: GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID.
export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!key || !placeId) {
    res.status(503).json({ error: 'Avaliações ao vivo não configuradas.' })
    return
  }
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pt-BR`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
    })
    if (!r.ok) throw new Error(`Google respondeu ${r.status}`)
    const d = await r.json()
    const reviews = (d.reviews || []).map((v) => ({
      author: v.authorAttribution?.displayName || 'Cliente',
      authorUrl: v.authorAttribution?.uri || null,
      rating: v.rating,
      text: v.text?.text || v.originalText?.text || '',
      when: v.relativePublishTimeDescription || '',
    }))
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400')
    res.status(200).json({
      rating: d.rating ?? null,
      count: d.userRatingCount ?? null,
      mapsUrl: d.googleMapsUri || null,
      reviews,
    })
  } catch (e) {
    res.status(502).json({ error: 'Falha ao consultar o Google.' })
  }
}
