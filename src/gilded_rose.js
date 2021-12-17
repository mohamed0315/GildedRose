class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }


  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.updateQualite(this.items[i]);
      this.updateSellin(this.items[i]);
    }

    return this.items;
  }

  updateQualite(Item) {
    if (Item.name != 'Aged Brie' && Item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (Item.quality > 0) {
        if (Item.name != 'Sulfuras, Hand of Ragnaros') {
          Item.quality = Item.quality - 1;
        }
      }
    } else {
      if (Item.quality < 50) {
        Item.quality = Item.quality + 1;
        if (Item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (Item.sellIn < 11) {
            this.augmenterQualite(Item);

          }
          if (Item.sellIn < 6) {
            this.augmenterQualite(Item);
          }
        }
      }
    }
  }

  augmenterQualite(Item) {
    if (Item.quality < 50) {
      Item.quality = Item.quality + 1;
    }
  }

  updateSellin(Item) {
    if (Item.name != 'Sulfuras, Hand of Ragnaros') {
      Item.sellIn = Item.sellIn - 1;
    }
    this.gererSiExpiration(Item);
  }

  gererSiExpiration(Item) {
    if (Item.sellIn < 0) {
      this.gererExpiration(Item);
    }
  }



  gererExpiration(Item) {
    if (Item.name != 'Aged Brie') {
      if (Item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (Item.quality > 0) {
          if (Item.name != 'Sulfuras, Hand of Ragnaros') {
            Item.quality = Item.quality - 1;
          }
        }
      } else {
        Item.quality = Item.quality - Item.quality;
      }
    } else {
      if (Item.quality < 50) {
        Item.quality = Item.quality + 1;
      }
    }
  }
}


module.exports = {
  Item,
  Shop
}
