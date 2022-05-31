const Tank = require('../models/book');

const createTank = async (req, res, next) => {
  const tank = req.body;

  const newTank = new Tank({
    tankId: tank.tankId,
    name: tank.name,
    quantity: tank.quantity,
    type: tank.type,
    species: tank.species,
    foodAmt:tank.foodAmt,
  });

  try {
    await newTank.save();
  } catch(err) {
    console.log(err);
    return res.send('Error occurred while saving the tank');
  }

  res.json({ tank: newTank });
};
const getListTanks = async (req, res, next) => {
  let tanks;

  try {
    tanks = await Tank.find();
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the tanks');
  }

  res.json({ tanks: tanks });
};

const getTankById = async (req, res, next) => {
  const { tankId } = req.params;

  if (!tankId) {
    return res.send('Please pass tankId');
  }

  let tank;

  try {
    tank = await Tank.find({ tankId: tankId });
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the tank');
  }

  res.json({ tank: tank });
};

const updateTankById = async (req, res, next) => {
  const { tankId } = req.params;

  const tank = req.body;

  if (!tankId) {
    return res.send('Please pass tankId');
  }

  let updatedTank;

  const newTank = {
    name: tank.name,
    quantity: tank.quantity,
    type: tank.type,
    species: tank.species,
    foodAmt: tank.foodAmt,
  };

  try {
    updatedTank = await Tank.findOneAndUpdate({ tankId: tankId }, newTank, { new: true });
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while updating the tank');
  }

  res.json({ tank: updatedTank });
};

const deleteTankById = async (req, res, next) => {
  const { tankId } = req.params;

  if (!tankId) {
    return res.send('Please pass tankId');
  }

  try {
    await Tank.findOneAndDelete({ tankId: tankId });
  } catch(err) {
    console.log(err);
    return res.send('Error occurred while deleting the tank');
  }

  res.json({ message: 'Tank deleted successfully' });
};

module.exports = { createTank, getListTanks, getTankById, updateTankById, deleteTankById };
