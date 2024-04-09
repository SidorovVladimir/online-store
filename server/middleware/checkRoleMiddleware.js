import jwt from 'jsonwebtoken';

export default (role) => {
  return (req, res, next) => {
    if (req.metod === 'OPTIONS') {
      next()
    }
  
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Пользователь не авторизован'});
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (decoded.role !== role) {
        return res.status(403).json({ message: 'Нет доступа'})
      }
      req.user = decoded;
      next();
  
    } catch (e) {
      res.status(401).json({ message: 'Пользователь не авторизован'})
  
    }
  };
}
