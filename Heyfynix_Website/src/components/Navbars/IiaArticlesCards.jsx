import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IiaArticlesCards.css'
const IiaArticlesCards = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
const articles = [
    {
      id: 1,
      title: "IIA Article 1",
      image: "https://example.com/image1.jpg", // Add your image URL here
      content: `
        <h2>Embracing Solar Energy: A Path to Sustainable Profitability</h2>
        <p><strong>Article – knowledge updates by Umesh Agarwal</strong></p>
        <p><em>Post-Diwali Greetings</em></p>
        <p>Dear Members,</p>
        <p>As we step into the post-Diwali season, I hope your celebrations were filled with joy and prosperity. Diwali, a festival of lights, symbolizes new beginnings and opportunities. With the festive spirit still in the air, it's time to reflect on our accomplishments and gear up for the upcoming year.</p>
        <p>As a seasoned professional with over 30 years of experience in energy solutions. My journey has taken me from providing fossil fuel-based energy solutions to advocating for renewable energy, particularly solar power.</p>
        <h3>THE IMPERATIVE FOR SUSTAINABLE PRACTICES</h3>
        <p>In today's dynamic business landscape, merely achieving profits through quality productivity is no longer sufficient. Industries must also focus on conserving expenses by leveraging viable resources. Among these resources, solar energy stands out as a highly effective option that can transform operational efficiency and financial performance.</p>
        <h3>FINANCIAL ADVANTAGES OF SOLAR ENERGY</h3>
        <p>Investing in a solar plant offers numerous financial benefits that can significantly improve your bottom line. Here are some key advantages:</p>
        <ol>
          <li><strong>Income Tax Benefits Under the Depreciation Act:</strong> Investing in a solar plant can yield substantial tax benefits under the depreciation act.</li>
          <li><strong>Revenue Generation Through Energy Production:</strong> A well-designed solar plant can generate around 5 lakh units of energy annually.</li>
          <li><strong>Carbon Credits:</strong> As you may know from initiatives by the Indian Industries Association (IIA), your solar plant can generate carbon credits.</li>
        </ol>
      `
    },
    {
      id: 2,
      title: "IIA Article 2",
      image: "https://example.com/image2.jpg", // Add your image URL here
      content: `
        <h2>Powering the Future: Unlocking the Potential of Solar Energy</h2>
        <p><strong>Embracing the Solar Revolution: A Trusted Consultant's Perspective</strong></p>
        <p>As a leading solar EPC (Engineering, Procurement, and Construction) company with over 25 years of industry experience, I've had the privilege of witnessing the remarkable transformation of the energy landscape.</p>
        <h3>The Changing Landscape</h3>
        <p>The current economic and environmental realities have created a perfect storm, driving the need for businesses to explore alternative energy solutions. With electricity costs on the rise, industries are facing mounting pressure to find ways to reduce their operational expenses and maintain their competitive edge.</p>
        <h3>The Solar Advantage</h3>
        <p>Solar energy has emerged as a viable and compelling solution for businesses of all sizes, from large-scale industrial operations to small and medium-sized enterprises (SMEs). By harnessing the power of the sun, companies can unlock significant cost savings and contribute to a cleaner, more sustainable future.</p>
      `
    }
  ];

    const handleCardClick = (id) => {
      const selected = articles.find((a) => a.id === id);
      setSelectedArticle(selected);
    };

    const handleBack = () => setSelectedArticle(null);

    return(
    <div className = "min-h-screen bg-[#000000] text-white p-6 flex flex-col items-center font-sans" >
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-4xl bg-[#1a1a1a] p-10 rounded-lg shadow-lg"
            >
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-[#00ff75] text-black rounded-full font-semibold"
                onClick={handleBack}
              >
                ← Back to Articles
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-10"
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="outer-card w-[190px] h-[254px] rounded-[20px] bg-gradient-to-br from-[#00ff75] to-[#3700ff] transition duration-300 hover:shadow-[0_0_30px_rgba(0,255,117,0.3)] cursor-pointer"
                  onClick={() => handleCardClick(article.id)}
                >
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    className="inner-card w-full h-full bg-[#1a1a1a] rounded-[20px] overflow-hidden transition-all duration-200 flex flex-col justify-between"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover rounded-t-[20px]"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                      <p className="text-sm text-gray-400 mt-2">Click to read full article</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
    </div>
  );
};

export default IiaArticlesCards;
