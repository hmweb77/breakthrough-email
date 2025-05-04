export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      const { name, email } = req.body;
  
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      const brevoApiKey = process.env.BREVO_API_KEY;
      const listId = process.env.BREVO_LIST_ID;
  
      if (!brevoApiKey || !listId) {
        return res.status(500).json({ error: 'Brevo API key or List ID missing in environment variables' });
      }
  
      const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': brevoApiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name || '',
          },
          listIds: [parseInt(listId)],
          updateEnabled: true,
        }),
      });
  
      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json();
        console.error('Brevo API error:', errorData);
        return res.status(500).json({ error: 'Failed to subscribe user to Brevo' });
      }
  
      return res.status(200).json({ message: 'User subscribed successfully' });
    } catch (error) {
      console.error('Internal server error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  