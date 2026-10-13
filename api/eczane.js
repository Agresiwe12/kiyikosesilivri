export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.collectapi.com/health/dutyPharmacy?ilce=Silivri&il=Istanbul', {
      headers: {
        'content-type': 'application/json',
        'authorization': 'apikey 4hmM5x2R2lvJaGuvJIwlf5:4HH22RpXhyDiT9xC2GZkLY'
      }
    });
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
