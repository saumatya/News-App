import React, { useState, useEffect } from 'react';

function HeadlineNews() {
  const [headlineArticles, setHeadlineArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us'); // Default country is set to 'us'
  const [selectedCategory, setSelectedCategory] = useState('general'); // Default category is set to 'general'

  useEffect(() => {
    const fetchHeadlineNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        const data = await response.json();

        if (data.status === 'ok') {
          setHeadlineArticles(data.articles || []);
          setErrorMessage('');
        } else {
          setErrorMessage('Failed to fetch headline news.');
        }
      } catch (error) {
        console.error('Error fetching headline news:', error);
        setErrorMessage('Error fetching headline news. Please try again later.');
      }
    };

    fetchHeadlineNews();
  }, [selectedCountry, selectedCategory]);

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Country names corresponding to ISO 3166-1 codes
  const countryNames = {
    ae: 'United Arab Emirates',
    ar: 'Argentina',
    at: 'Austria',
    au: 'Australia',
    be: 'Belgium',
    br: 'Brazil',
    ca: 'Canada',
    ch: 'Switzerland',
    cn: 'China',
    co: 'Colombia',
    cu: 'Cuba',
    cz: 'Czechia',
    de: 'Germany',
    eg: 'Egypt',
    fr: 'France',
    gb: 'United Kingdom',
    gr: 'Greece',
    hk: 'Hong Kong',
    hu: 'Hungary',
    id: 'Indonesia',
    ie: 'Ireland',
    il: 'Israel',
    in: 'India',
    it: 'Italy',
    jp: 'Japan',
    kr: 'South Korea',
    lt: 'Lithuania',
    lv: 'Latvia',
    ma: 'Morocco',
    mx: 'Mexico',
    my: 'Malaysia',
    ng: 'Nigeria',
    nl: 'Netherlands',
    no: 'Norway',
    nz: 'New Zealand',
    ph: 'Philippines',
    pl: 'Poland',
    pt: 'Portugal',
    ro: 'Romania',
    rs: 'Serbia',
    ru: 'Russia',
    sa: 'Saudi Arabia',
    se: 'Sweden',
    sg: 'Singapore',
    si: 'Slovenia',
    sk: 'Slovakia',
    th: 'Thailand',
    tr: 'Turkey',
    tw: 'Taiwan',
    ua: 'Ukraine',
    us: 'United States',
    ve: 'Venezuela',
    za: 'South Africa'
  };

  const categoryNames = {
    business: 'Business',
    entertainment: 'Entertainment',
    general: 'General',
    health: 'Health',
    science: 'Science',
    sports: 'Sports',
    technology: 'Technology',
  };

  return (
    <div>
      <h2>Headline News</h2>
      {/* Country selection dropdown */}
      <label htmlFor="country">Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleChangeCountry}>
        {Object.entries(countryNames).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
      {/* Category selection dropdown */}
      <label htmlFor="category">Select Category:</label>
      <select id="category" value={selectedCategory} onChange={handleChangeCategory}>
        {Object.entries(categoryNames).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>
      {/* Display headline articles */}
      {headlineArticles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* Add more details if needed */}
        </div>
      ))}
      {/* Display error message if exists */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default HeadlineNews;
