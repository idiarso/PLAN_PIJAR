const Academic = require('./Academic');
const Announcement = require('./Announcement');
const Attendance = require('./Attendance');
const Book = require('./Book');
const CBTExam = require('./CBTExam');
const ChatMessage = require('./ChatMessage');
const Content = require('./Content');
const ExamQuestion = require('./ExamQuestion');
const ExamRoom = require('./ExamRoom');
const ExamSchedule = require('./ExamSchedule');
const Grade = require('./Grade');
const Internship = require('./Internship');
const LeavePermit = require('./LeavePermit');
const LibraryLoan = require('./LibraryLoan');
const Notification = require('./Notification');
const QuestionAnalysis = require('./QuestionAnalysis');
const QuestionPackage = require('./QuestionPackage');
const ReferenceReading = require('./ReferenceReading');
const Report = require('./Report');
const ReportCard = require('./ReportCard');
const Schedule = require('./Schedule');
const School = require('./School');
const Setting = require('./Setting');
const Task = require('./Task');
const TaskSubmission = require('./TaskSubmission');
const User = require('./User');
const VirtualClassroom = require('./VirtualClassroom');

module.exports = (sequelize) => {
  // Initialize models
  const AcademicModel = Academic(sequelize);
  const AnnouncementModel = Announcement(sequelize);
  const AttendanceModel = Attendance(sequelize);
  const BookModel = Book(sequelize);
  const CBTExamModel = CBTExam(sequelize);
  const ChatMessageModel = ChatMessage(sequelize);
  const ContentModel = Content(sequelize);
  const ExamQuestionModel = ExamQuestion(sequelize);
  const ExamRoomModel = ExamRoom(sequelize);
  const ExamScheduleModel = ExamSchedule(sequelize);
  const GradeModel = Grade(sequelize);
  const InternshipModel = Internship(sequelize);
  const LeavePermitModel = LeavePermit(sequelize);
  const LibraryLoanModel = LibraryLoan(sequelize);
  const NotificationModel = Notification(sequelize);
  const QuestionAnalysisModel = QuestionAnalysis(sequelize);
  const QuestionPackageModel = QuestionPackage(sequelize);
  const ReferenceReadingModel = ReferenceReading(sequelize);
  const ReportModel = Report(sequelize);
  const ReportCardModel = ReportCard(sequelize);
  const ScheduleModel = Schedule(sequelize);
  const SchoolModel = School(sequelize);
  const SettingModel = Setting(sequelize);
  const TaskModel = Task(sequelize);
  const TaskSubmissionModel = TaskSubmission(sequelize);
  const UserModel = User(sequelize);
  const VirtualClassroomModel = VirtualClassroom(sequelize);

  // Define all associations here

  // User Associations
  UserModel.belongsTo(SchoolModel, { foreignKey: 'schoolId' });
  UserModel.belongsTo(UserModel, { as: 'parent', foreignKey: 'parentId' });
  UserModel.hasMany(UserModel, { as: 'children', foreignKey: 'parentId' });
  UserModel.hasMany(AnnouncementModel, { foreignKey: 'authorId' });
  UserModel.hasMany(AttendanceModel, { as: 'studentAttendances', foreignKey: 'studentId' });
  UserModel.hasMany(AttendanceModel, { as: 'recordedAttendances', foreignKey: 'recordedById' });
  UserModel.hasMany(CBTExamModel, { foreignKey: 'authorId' });
  UserModel.hasMany(ChatMessageModel, { as: 'sentMessages', foreignKey: 'senderId' });
  UserModel.hasMany(ChatMessageModel, { as: 'receivedMessages', foreignKey: 'receiverId' });
  UserModel.hasMany(ContentModel, { foreignKey: 'authorId' });
  UserModel.hasMany(ExamScheduleModel, { as: 'supervisedExams', foreignKey: 'supervisorId' });
  UserModel.hasMany(GradeModel, { as: 'studentGrades', foreignKey: 'studentId' });
  UserModel.hasMany(GradeModel, { as: 'teacherGrades', foreignKey: 'teacherId' });
  UserModel.hasMany(InternshipModel, { as: 'studentInternships', foreignKey: 'studentId' });
  UserModel.hasMany(InternshipModel, { as: 'schoolSupervisedInternships', foreignKey: 'schoolSupervisorId' });
  UserModel.hasMany(LeavePermitModel, { as: 'studentLeavePermits', foreignKey: 'studentId' });
  UserModel.hasMany(LeavePermitModel, { as: 'approvedLeavePermits', foreignKey: 'approvedById' });
  UserModel.hasMany(LibraryLoanModel, { as: 'borrowedBooks', foreignKey: 'borrowerId' });
  UserModel.hasMany(LibraryLoanModel, { as: 'processedLoans', foreignKey: 'librarianId' });
  UserModel.hasMany(NotificationModel, { foreignKey: 'userId' });
  UserModel.hasMany(QuestionAnalysisModel, { as: 'conductedAnalyses', foreignKey: 'analystId' });
  UserModel.hasMany(QuestionPackageModel, { as: 'createdQuestionPackages', foreignKey: 'createdBy' });
  UserModel.hasMany(QuestionPackageModel, { as: 'modifiedQuestionPackages', foreignKey: 'lastModifiedBy' });
  UserModel.hasMany(ReferenceReadingModel, { as: 'authoredReferenceReadings', foreignKey: 'authorId' });
  UserModel.hasMany(ReportModel, { foreignKey: 'createdBy' });
  UserModel.hasMany(ReportCardModel, { as: 'studentReportCards', foreignKey: 'studentId' });
  UserModel.hasMany(ReportCardModel, { as: 'homeroomTeacherReportCards', foreignKey: 'homeroomTeacherId' });
  UserModel.hasMany(ReportCardModel, { as: 'principalReportCards', foreignKey: 'principalId' });
  UserModel.hasMany(ScheduleModel, { as: 'taughtSchedules', foreignKey: 'teacherId' });
  UserModel.hasMany(SettingModel, { foreignKey: 'userId' });
  UserModel.hasMany(TaskModel, { as: 'assignedTasks', foreignKey: 'assignedBy' });
  UserModel.hasMany(TaskSubmissionModel, { as: 'studentSubmissions', foreignKey: 'studentId' });
  UserModel.hasMany(TaskSubmissionModel, { as: 'gradedSubmissions', foreignKey: 'gradedBy' });
  UserModel.hasMany(VirtualClassroomModel, { as: 'homeroomClasses', foreignKey: 'homeroomTeacherId' });

  // School Associations
  SchoolModel.hasMany(UserModel, { foreignKey: 'schoolId' });
  SchoolModel.hasMany(ExamRoomModel, { foreignKey: 'schoolId' });
  SchoolModel.hasMany(ReportCardModel, { foreignKey: 'schoolId' });
  SchoolModel.hasMany(SettingModel, { foreignKey: 'schoolId' });
  SchoolModel.hasMany(VirtualClassroomModel, { foreignKey: 'schoolId' });

  // Academic Associations
  AcademicModel.hasMany(AttendanceModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(CBTExamModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ContentModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ExamScheduleModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(GradeModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(InternshipModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(LeavePermitModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(QuestionPackageModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ReferenceReadingModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ReportModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ReportCardModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(ScheduleModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(TaskModel, { foreignKey: 'academicId' });
  AcademicModel.hasMany(VirtualClassroomModel, { foreignKey: 'academicId' });

  // Announcement Associations
  AnnouncementModel.belongsTo(UserModel, { as: 'author', foreignKey: 'authorId' });

  // Attendance Associations
  AttendanceModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  AttendanceModel.belongsTo(UserModel, { as: 'recorder', foreignKey: 'recordedById' });
  AttendanceModel.belongsTo(ScheduleModel, { foreignKey: 'scheduleId' });
  AttendanceModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // Book Associations
  BookModel.hasMany(LibraryLoanModel, { foreignKey: 'bookId' });

  // CBTExam Associations
  CBTExamModel.belongsTo(QuestionPackageModel, { foreignKey: 'questionPackageId' });
  CBTExamModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  CBTExamModel.belongsTo(UserModel, { as: 'author', foreignKey: 'authorId' });
  CBTExamModel.hasMany(ExamRoomModel, { foreignKey: 'cbtExamId' });
  CBTExamModel.hasMany(ExamScheduleModel, { foreignKey: 'cbtExamId' });
  CBTExamModel.hasMany(QuestionAnalysisModel, { foreignKey: 'cbtExamId' });

  // ChatMessage Associations
  ChatMessageModel.belongsTo(UserModel, { as: 'sender', foreignKey: 'senderId' });
  ChatMessageModel.belongsTo(UserModel, { as: 'receiver', foreignKey: 'receiverId' });
  ChatMessageModel.belongsTo(VirtualClassroomModel, { as: 'classroom', foreignKey: 'classroomId' });

  // Content Associations
  ContentModel.belongsTo(UserModel, { as: 'author', foreignKey: 'authorId' });
  ContentModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // ExamQuestion Associations
  ExamQuestionModel.belongsTo(QuestionPackageModel, { foreignKey: 'questionPackageId' });
  ExamQuestionModel.hasMany(QuestionAnalysisModel, { foreignKey: 'examQuestionId' });

  // ExamRoom Associations
  ExamRoomModel.belongsTo(CBTExamModel, { foreignKey: 'cbtExamId' });
  ExamRoomModel.belongsTo(SchoolModel, { foreignKey: 'schoolId' });
  ExamRoomModel.hasMany(ExamScheduleModel, { foreignKey: 'roomId' });
  ExamRoomModel.hasMany(ScheduleModel, { foreignKey: 'roomId' });

  // ExamSchedule Associations
  ExamScheduleModel.belongsTo(CBTExamModel, { foreignKey: 'cbtExamId' });
  ExamScheduleModel.belongsTo(ExamRoomModel, { foreignKey: 'roomId' });
  ExamScheduleModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  ExamScheduleModel.belongsTo(UserModel, { as: 'supervisor', foreignKey: 'supervisorId' });

  // Grade Associations
  GradeModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  GradeModel.belongsTo(UserModel, { as: 'teacher', foreignKey: 'teacherId' });
  GradeModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  GradeModel.belongsTo(ScheduleModel, { foreignKey: 'scheduleId' });

  // Internship Associations
  InternshipModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  InternshipModel.belongsTo(UserModel, { as: 'schoolSupervisor', foreignKey: 'schoolSupervisorId' });
  InternshipModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // LeavePermit Associations
  LeavePermitModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  LeavePermitModel.belongsTo(UserModel, { as: 'approver', foreignKey: 'approvedById' });
  LeavePermitModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // LibraryLoan Associations
  LibraryLoanModel.belongsTo(BookModel, { foreignKey: 'bookId' });
  LibraryLoanModel.belongsTo(UserModel, { as: 'borrower', foreignKey: 'borrowerId' });
  LibraryLoanModel.belongsTo(UserModel, { as: 'librarian', foreignKey: 'librarianId' });

  // Notification Associations
  NotificationModel.belongsTo(UserModel, { foreignKey: 'userId' });

  // QuestionAnalysis Associations
  QuestionAnalysisModel.belongsTo(ExamQuestionModel, { foreignKey: 'examQuestionId' });
  QuestionAnalysisModel.belongsTo(CBTExamModel, { foreignKey: 'cbtExamId' });
  QuestionAnalysisModel.belongsTo(UserModel, { as: 'analyst', foreignKey: 'analystId' });

  // QuestionPackage Associations
  QuestionPackageModel.belongsTo(UserModel, { as: 'creator', foreignKey: 'createdBy' });
  QuestionPackageModel.belongsTo(UserModel, { as: 'modifier', foreignKey: 'lastModifiedBy' });
  QuestionPackageModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  QuestionPackageModel.hasMany(ExamQuestionModel, { foreignKey: 'questionPackageId' });
  QuestionPackageModel.hasMany(CBTExamModel, { foreignKey: 'questionPackageId' });
  QuestionPackageModel.hasMany(ReferenceReadingModel, { foreignKey: 'questionPackageId' });

  // ReferenceReading Associations
  ReferenceReadingModel.belongsTo(QuestionPackageModel, { foreignKey: 'questionPackageId' });
  ReferenceReadingModel.belongsTo(UserModel, { as: 'author', foreignKey: 'authorId' });
  ReferenceReadingModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // Report Associations
  ReportModel.belongsTo(UserModel, { as: 'creator', foreignKey: 'createdBy' });
  ReportModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });

  // ReportCard Associations
  ReportCardModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  ReportCardModel.belongsTo(UserModel, { as: 'homeroomTeacher', foreignKey: 'homeroomTeacherId' });
  ReportCardModel.belongsTo(UserModel, { as: 'principal', foreignKey: 'principalId' });
  ReportCardModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  ReportCardModel.belongsTo(SchoolModel, { foreignKey: 'schoolId' });

  // Schedule Associations
  ScheduleModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  ScheduleModel.belongsTo(UserModel, { as: 'teacher', foreignKey: 'teacherId' });
  ScheduleModel.belongsTo(VirtualClassroomModel, { foreignKey: 'virtualClassroomId' });
  ScheduleModel.belongsTo(ExamRoomModel, { foreignKey: 'roomId' });
  ScheduleModel.hasMany(AttendanceModel, { foreignKey: 'scheduleId' });
  ScheduleModel.hasMany(GradeModel, { foreignKey: 'scheduleId' });

  // Setting Associations
  SettingModel.belongsTo(SchoolModel, { foreignKey: 'schoolId' });
  SettingModel.belongsTo(UserModel, { foreignKey: 'userId' });

  // Task Associations
  TaskModel.belongsTo(UserModel, { as: 'assigner', foreignKey: 'assignedBy' });
  TaskModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  TaskModel.belongsTo(VirtualClassroomModel, { foreignKey: 'virtualClassroomId' });
  TaskModel.hasMany(TaskSubmissionModel, { foreignKey: 'taskId' });

  // TaskSubmission Associations
  TaskSubmissionModel.belongsTo(TaskModel, { foreignKey: 'taskId' });
  TaskSubmissionModel.belongsTo(UserModel, { as: 'student', foreignKey: 'studentId' });
  TaskSubmissionModel.belongsTo(UserModel, { as: 'grader', foreignKey: 'gradedBy' });

  // VirtualClassroom Associations
  VirtualClassroomModel.belongsTo(UserModel, { as: 'homeroomTeacher', foreignKey: 'homeroomTeacherId' });
  VirtualClassroomModel.belongsTo(AcademicModel, { foreignKey: 'academicId' });
  VirtualClassroomModel.belongsTo(SchoolModel, { foreignKey: 'schoolId' });
  VirtualClassroomModel.hasMany(ChatMessageModel, { foreignKey: 'classroomId' });
  VirtualClassroomModel.hasMany(ScheduleModel, { foreignKey: 'virtualClassroomId' });
  VirtualClassroomModel.hasMany(TaskModel, { foreignKey: 'virtualClassroomId' });

  return {
    Academic: AcademicModel,
    Announcement: AnnouncementModel,
    Attendance: AttendanceModel,
    Book: BookModel,
    CBTExam: CBTExamModel,
    ChatMessage: ChatMessageModel,
    Content: ContentModel,
    ExamQuestion: ExamQuestionModel,
    ExamRoom: ExamRoomModel,
    ExamSchedule: ExamScheduleModel,
    Grade: GradeModel,
    Internship: InternshipModel,
    LeavePermit: LeavePermitModel,
    LibraryLoan: LibraryLoanModel,
    Notification: NotificationModel,
    QuestionAnalysis: QuestionAnalysisModel,
    QuestionPackage: QuestionPackageModel,
    ReferenceReading: ReferenceReadingModel,
    Report: ReportModel,
    ReportCard: ReportCardModel,
    Schedule: ScheduleModel,
    School: SchoolModel,
    Setting: SettingModel,
    Task: TaskModel,
    TaskSubmission: TaskSubmissionModel,
    User: UserModel,
    VirtualClassroom: VirtualClassroomModel,
  };
};