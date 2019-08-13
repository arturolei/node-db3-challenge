const db = require('../data/db-config.js');


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
  };

function find() {
  return db('schemes');
 }

 function findById(id) {
   return db('schemes').where({ id })
 }

function findSteps(id) {
  return db.select('scheme_name', "step_number", "instructions","steps.id").from('steps')
  .innerJoin("schemes", 'schemes.id', 'steps.scheme_id' ).where({ scheme_id: id });
}

async function add(schemeData) {
 const [id] = await db('schemes').insert(schemeData)
 return findById(id);
}

function update(schemeData, id) {
  return db('schemes').where({ id }).update(schemeData);
}

function remove(id) {
 return db('schemes').where({ id }).delete();
}

function addStep(step, scheme_id) {
  return db('steps').insert({ step_number: step.step_number, instructions: step.instructions, scheme_id: scheme_id  });
}

