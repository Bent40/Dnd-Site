const get = async (model, filter = {}) => {
  return await model.find({ ...filter });
};

const getOne = async (model, filter = {}) => {
  return await model.findOne({ ...filter });
};

const postOne = async (model, body) => {
  const instance = new model({
    ...body,
  });
  return await instance.save();
};

const patchOne = async (model,filter,body)=>{
  return await model.findOneAndUpdate({...filter},{$set:{...body}})
}

const removeOne = async (model,filter) =>{
  return awaitmodel.findOneAndDelete({...filter})
}

module.exports = {
  get,
  getOne,
  postOne,
  patchOne,
  removeOne
};
