const { prisma } = require('../prisma/prisma-client')

/**
 * @route GET /api/emoloyees
 * @desc Get all employees
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()

    res.status(200).json(employees)
  } catch {
    res.status(500).json({ message: 'Failed to get employees' })
  }
}

/**
 * @route POST /api/emoloyees/add
 * @desc Add employee
 * @access Private
 */
const add = async (req, res) => {
  try {
    const data = req.body

    if (!data.firstName || !data.lastname || !data.adress || !data.age) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const employee = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        createdEmployee: {
          create: data,
        },
      },
    })

    return res.status(201).json(employee)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = {
  all,
  add,
}
