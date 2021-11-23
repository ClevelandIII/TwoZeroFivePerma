const { StatusCodes } = require("http-status-codes");
const Challenge = require("../Models/challengeSchema");

const getChallenge = async (req, res) => {
  const { userID } = req.user.userID;
  const { id: challengeID } = req.params;

  const challenge = await Job.findOne({ createdBy: userID, _id: challengeID });

  if (!challenge) {
    throw new NotFoundError(`${challengeID} not found`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};
const getAllChallenge = async (req, res) => {
  const challenge = await Challenge.find({ createdBy: req.userID }).sort(
    "created at"
  );
  res.status(StatusCodes.OK).json({ challenge, length: challenge.length });
};

const createChallenge = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const challenge = await Challenge.create(req.body);
  console.log(challenge);
  res.status(StatusCodes.CREATED).json({ challenge });
};

const updateChallenge = async (req, res) => {
  const {
    body: {
      Name: name,
      Map: map,
      Difficulty: difficulty,
      Lives: lives,
      Cash: cash,
      Monkeys: monkeys,
      Options: options,
    },
    user: { userID },
    params: { id: challengeID },
  } = req;

  // if (!name || !map || !difficulty || !lives || !cash || !monkeys || !options) {
  //   throw new BadRequestError(
  //     "Please provide a name, and map, difficulty, and lives, and cash, and monkeys, and options"
  //   );
  // }

  const challenge = await Challenge.findByIdAndUpdate(
    { _id: challengeID, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!challenge) {
    throw new BadRequestError(`no new job with ${jobID}`);
  }

  res.status(StatusCodes.OK).json({ challenge });
};

const deleteChallenge = async (req, res) => {
  res.send("Delete Challenge");
};

module.exports = {
  getChallenge,
  getAllChallenge,
  createChallenge,
  updateChallenge,
  deleteChallenge,
};
