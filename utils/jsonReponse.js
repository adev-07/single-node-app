exports.jsonResponse = (res, statusCode, data = []) => {
    const isSucces = statusCode < 200 || statusCode < 300;
    const messsage = isSucces ? 'Successful' : 'Error';

    res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // res.setHeader('Access-Control-Allow-Credentials', true);

    res.status(statusCode).json({
        success: isSucces,
        message: messsage,
        data,
    });
};