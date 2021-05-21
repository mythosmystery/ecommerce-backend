const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json(categories);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    category ? res.status(200).json(category) : res.status(404).json({ message: "No category with this ID!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    category ? res.status(200).json(category) : res.status(404).json({ message: "No category with this ID!" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    category ? res.status(200).json(category) : res.status(404).json({ message: "No category with this ID!" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
