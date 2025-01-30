const GpuSeries = require('../models/gpu_series');

const getGpuSeries = async (req, res) => {
  try {
    const series = await GpuSeries.findAll({
      where: {
        is_deleted: false
      }
    });
    res.json(series);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getGpuSeriesById = async (req, res) => {
  try {
    const series = await GpuSeries.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (series) {
      res.json(series);
    } else {
      res.status(404).send({ message: 'GPU series not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createGpuSeries = async (req, res) => {
  try {
    const series = await GpuSeries.create(req.body);
    res.status(201).json(series);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateGpuSeries = async (req, res) => {
  try {
    const series = await GpuSeries.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (series) {
      await series.update(req.body);
      res.json(series);
    } else {
      res.status(404).send({ message: 'GPU series not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteGpuSeries = async (req, res) => {
  try {
    const series = await GpuSeries.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (series) {
      await series.update({ is_deleted: true });
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'GPU series not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getGpuSeries,
  getGpuSeriesById,
  createGpuSeries,
  updateGpuSeries,
  deleteGpuSeries
};
