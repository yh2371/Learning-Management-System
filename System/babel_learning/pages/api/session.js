import middleware from '../../middlewares/withMiddleware';

const handler = (req, res) => {
  if (req.method === 'GET') {
    if (req.user) {
      const { name, email, username, password, courseList } = req.user;
      return res.status(200).send({
        status: 'ok',
        data: {
          isLoggedIn: true,
          user: { name, email, username, password, courseList },
        },
      });
    }
    return res.status(200).send({
      status: 'ok',
      data: {
        isLoggedIn: false,
        user: {},
      },
    });
  }
  if (req.method === 'DELETE') {
    delete req.session.userId;
    return res.status(200).send({
      status: 'ok',
      data: {
        isLoggedIn: false,
        message: 'You have been logged out.',
      },
    });
  }
  return res.status(405).end();
};

export default middleware(handler);
