var fruit = [
  'apple',
  'banana',
  'grape',
  'grapefruit',
  'watermelon'
]

export default () => (
  <div>
    Fruit (that don't startsWith 'g'):
    <ul>
      {fruit.map(f => f.startsWith('g') ? null : <li>{f}</li>)}
    </ul>
  </div>
)
