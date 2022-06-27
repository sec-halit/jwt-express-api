const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')
const educationSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a education title'],
    },
    dateTitle: {
      type: String,
      required: [true, 'Please add a education dateTitle'],
    },
    detail: {
      type: String,
      required: [true, 'Please add a education detail'],
    }
  },
  {
    timestamps: true,
  }
)
const workSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a work title'],
    },
    dateTitle: {
      type: String,
      required: [true, 'Please add a work dateTitle'],
    },
    detail: {
      type: String,
      required: [true, 'Please add a work detail'],
    }
  },
  {
    timestamps: true,
  }
)
const referenceSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a reference title'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a reference phone'],
    },
    dateTitle: {
      type: String,
      required: [false, 'Please add a dateTitle'],
    },
    detail: {
      type: String,
      required: [true, 'Please add a detail'],
    }
  },
  {
    timestamps: true,
  }
)
const infoSchema =mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, 'Please add a info location'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a info phone'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
    },
    profileUrl: {
      type: String,
      required: [true, 'Please add a profileUrl'],
    }
  },
  {
    timestamps: true,
  }
)
const projectSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a project title'],
    },
    column: {
      type: String,
      required: [true, 'Please add a project column'],
    }
  },
  {
    timestamps: true,
  }
)
const skillSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a skill title'],
    },
    column: {
      type: String,
      required: [true, 'Please add a skill column'],
    }
  },
  {
    timestamps: true,
  }
)

const cvSchema = mongoose.Schema(
  {
    educations: [
      educationSchema,
    ],
    works: [
      workSchema
    ],
    projects: [
      projectSchema
    ],
    skills: [
      skillSchema
    ],
    references: [
      referenceSchema
    ],
    info:infoSchema,
    userId:{
      type:ObjectID
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Cv', cvSchema)
