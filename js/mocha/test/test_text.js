const { Shop, Item } = require('../src/gilded_rose.js')
const fs = require('fs')


const getTextTest = () => {
  const items = [
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Sulfuras, Hand of Ragnaros', -1, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)
  ]
  const shop = new Shop(items)
  let text = ''
  for (let i = 0; i < 30; i++) {
    text += '-------- day " + i + " --------\n'
    text += 'name, sellIn, quality\n'
    for (const item of items) {
      text += item.name + ', ' + item.sellIn + ', ' + item.quality + '\n'
    }
    text += '\n'
    shop.updateQuality()
  }
  return text
}

const text = getTextTest()

fs.writeFile('store-test-' + Math.round((new Date()).getTime() / 1000) + '.txt', text, (err) => {
  if (err) {
    console.error('Writing test file failed')
  }
})
