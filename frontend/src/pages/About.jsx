import React from 'react';
import { Box, Typography } from '@mui/material';
import { GoDotFill } from "react-icons/go";


const About = () => {
    const mern = [
        { dot: <GoDotFill />, point: "MongoDB: A NoSQL database used to store user data, watchlists, and historical stock data. Its flexibility and scalability make it ideal for managing large datasets and providing fast access to data." },
        { dot: <GoDotFill />, point: "Express.js: A web application framework for Node.js that simplifies the development of server-side logic. It is used to create RESTful APIs that interact with the front-end and database." },
        { dot: <GoDotFill />, point: "React: A JavaScript library for building user interfaces. It allows us to create a dynamic and responsive user experience. Components like the search bar, stock details, and watchlist are all built using React." },
        { dot: <GoDotFill />, point: "Node.js: A JavaScript runtime environment that allows us to execute JavaScript code on the server-side. It is used in conjunction with Express.js to create our back-end services." },
    ];

    const flask = [
        { dot: <GoDotFill />, point: "Flask is a lightweight WSGI web application framework in Python. It is used for creating our machine learning models' RESTful API endpoints. The Flask server handles requests for stock predictions and processes data through our LSTM model." }
    ];

    const lstm = [
        { dot: <GoDotFill />, point: "LSTM is a type of recurrent neural network (RNN) that excels in time series prediction tasks. We use an LSTM model to analyze historical stock data and predict future stock prices. The model is trained on past stock prices and fine-tuned to provide accurate predictions." }
    ]

    const yahooapi = [
        { dot: <GoDotFill />, point: "Yahoo Finance API is used to fetch historical stock data, real-time stock prices, company details, and news articles. This data is essential for training our LSTM model and providing users with the latest information about their stocks of interest." }
    ];

    const redux = [
        { dot: <GoDotFill />, point: "Redux is a state management library for JavaScript applications. It helps manage the application's state in a predictable way. In our app, Redux is used to manage the state of user authentication, search results, stock details, and the watchlist." }
    ];

    const features = [
        { heading: "1. Stock Prediction", dot: <GoDotFill />, point: "Our LSTM model processes historical stock data obtained from the Yahoo Finance API to predict future stock prices. Users can view these predictions in an easy-to-understand format." },
        { heading: "2. Historical Data and Company Details", dot: <GoDotFill />, point: "Users can access detailed historical data and company information for various stocks. This data is fetched from the Yahoo Finance API and displayed in an organized manner." },
        { heading: "3. News", dot: <GoDotFill />, point: "The app fetches the latest news articles related to specific stocks, allowing users to stay informed about recent developments that may affect stock prices." },
        { heading: "4. Watchlist", dot: <GoDotFill />, point: "Users can create a personalized watchlist to monitor their favorite stocks. The watchlist feature allows users to quickly access stock predictions, historical data, and news for their selected stocks." },
    ];

    const work=[
        {point:"1. Data Fetching: When a user searches for a stock, the app fetches the latest data from the Yahoo Finance API, including historical prices, company details, and news articles."},
        {point:"2. Prediction: The historical data is sent to our Flask server, where the LSTM model processes it and returns predicted stock prices."},
        {point:"3. State Management: Redux manages the state of the app, ensuring that the data is consistent and available across different components."},
        {point:"4. User Interface: The React front-end displays the data in a user-friendly format, including interactive charts, news feeds, and a customizable watchlist."},
    ]

    return (
        <Box sx={{ maxWidth: '100%', padding: '2rem' }}>
            <Box sx={{
                width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                '@media (max-width:770px)': {
                    width: '100%'
                }
            }}>
                <Box sx={{ marginBottom: '20px' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
                        About Our Stock Prediction App
                    </Typography>
                </Box>
                <Box sx={{ marginY: '20px' }}>
                    <Typography sx={{ fontSize: '16px' }}>
                        Welcome to our Stock Prediction App! This application leverages cutting-edge
                        technologies to provide users with reliable stock predictions, historical data,
                        company news, and a comprehensive watchlist feature. Below, we explain the key
                        technologies and frameworks that power our application.
                    </Typography>
                </Box>
                <Box sx={{ marginY: '20px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 700 }}>Technology Stack</Typography>
                    <Box sx={{ marginY: '10px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>1. MERN Stack (MongoDB, Express.js, React, Node.js)</Typography>
                        {mern.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ marginY: '10px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>2. Flask</Typography>
                        {flask.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ marginY: '10px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>3. LSTM (Long Short-Term Memory)</Typography>
                        {lstm.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ marginY: '10px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>4. Yahoo Finance API</Typography>
                        {yahooapi.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ marginY: '10px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>5. Redux</Typography>
                        {redux.map((item, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ marginY: '20px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 700 }}>Features</Typography>

                    {features.map((item, index) => (
                        <Box sx={{ marginY: '10px' }} key={index}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>{item.heading}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '16px', gap: '12px' }} key={index}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.dot}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{item.point}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ marginY: '20px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 700 }}>How It Works</Typography>
                    {work.map((item, index) => (
                        <Box sx={{ marginY: '10px' }} key={index}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 400}}>{item.point}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default About