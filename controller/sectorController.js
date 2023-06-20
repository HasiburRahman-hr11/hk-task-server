const Sector = require("../model/Sector");

exports.createNewSector = async (req, res) => {
  try {
    const newSector = new Sector(req.body);
    await newSector.save();
    res.status(201).json(newSector);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getAllSectors = async (req,res) => {
  try {
    const allSectors = await Sector.find();
    res.status(200).json(allSectors);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
