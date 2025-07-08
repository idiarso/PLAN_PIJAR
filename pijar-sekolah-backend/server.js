const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const cbtExamRoutes = require('./routes/cbtExamRoutes');
const taskRoutes = require('./routes/taskRoutes');
const contentRoutes = require('./routes/contentRoutes');
const reportRoutes = require('./routes/reportRoutes');
const academicRoutes = require('./routes/academicRoutes');
const settingRoutes = require('./routes/settingRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const chatMessageRoutes = require('./routes/chatMessageRoutes');
const examQuestionRoutes = require('./routes/examQuestionRoutes');
const examRoomRoutes = require('./routes/examRoomRoutes');
const examScheduleRoutes = require('./routes/examScheduleRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const questionAnalysisRoutes = require('./routes/questionAnalysisRoutes');
const questionPackageRoutes = require('./routes/questionPackageRoutes');
const referenceReadingRoutes = require('./routes/referenceReadingRoutes');
const reportCardRoutes = require('./routes/reportCardRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const taskSubmissionRoutes = require('./routes/taskSubmissionRoutes');
const virtualClassroomRoutes = require('./routes/virtualClassroomRoutes');
const { sequelize } = require('./sequelize').sequelize;

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = 'your_jwt_secret_here'; // Change to env var in production

app.use(cors());
app.use(bodyParser.json());

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Use user routes
app.use('/api/users', authenticateToken, userRoutes);

// Use school routes
app.use('/api/schools', authenticateToken, schoolRoutes);

// Use attendance routes
app.use('/api/attendances', authenticateToken, attendanceRoutes);

// Use CBT exam routes
app.use('/api/cbtExams', authenticateToken, cbtExamRoutes);

// Use task routes
app.use('/api/tasks', authenticateToken, taskRoutes);

// Use content routes
app.use('/api/contents', authenticateToken, contentRoutes);

// Use report routes
app.use('/api/reports', authenticateToken, reportRoutes);

// Use academic routes
app.use('/api/academics', authenticateToken, academicRoutes);

// Use setting routes
app.use('/api/settings', authenticateToken, settingRoutes);

app.use('/api/announcements', authenticateToken, announcementRoutes);
app.use('/api/chatMessages', authenticateToken, chatMessageRoutes);
app.use('/api/examQuestions', authenticateToken, examQuestionRoutes);
app.use('/api/examRooms', authenticateToken, examRoomRoutes);
app.use('/api/examSchedules', authenticateToken, examScheduleRoutes);
app.use('/api/grades', authenticateToken, gradeRoutes);
app.use('/api/notifications', authenticateToken, notificationRoutes);
app.use('/api/questionAnalyses', authenticateToken, questionAnalysisRoutes);
app.use('/api/questionPackages', authenticateToken, questionPackageRoutes);
app.use('/api/referenceReadings', authenticateToken, referenceReadingRoutes);
app.use('/api/reportCards', authenticateToken, reportCardRoutes);
app.use('/api/schedules', authenticateToken, scheduleRoutes);
app.use('/api/taskSubmissions', authenticateToken, taskSubmissionRoutes);
app.use('/api/virtualClassrooms', authenticateToken, virtualClassroomRoutes);

// Login endpoint
app.post('/api/login', (req, res) => {
  // TODO: Replace with DB user lookup
  const { username, password } = req.body;
  // For demo, just return token for any username
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ username: req.user.username });
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
