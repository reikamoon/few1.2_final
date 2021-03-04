import data from './metal.json'

data.forEach((obj, i) => {
    obj.id = i
})

export default data