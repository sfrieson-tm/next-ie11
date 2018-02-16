var family1 = {
  mom: 'Carol',
  daughter1: 'Marcia',
  daughter2: 'Jan',
  daughter3: 'Cindy'
}

var family2 = {
  father: 'Mike',
  son1: 'Greg',
  son2: 'Peter',
  son3: 'Bobby'
}

var bradyBunch = Object.assign({}, family1, family2)

export default () => (
  <div>
    <b>The Brady Bunch</b>
    <ul>
      {Object.keys(bradyBunch).map(role => <li>{role}: {bradyBunch[role]} Brady</li>)}
    </ul>
  </div>
)
