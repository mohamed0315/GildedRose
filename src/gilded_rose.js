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
      this.diminuerQualiteSiExiste(Item);
    } else {
      this.augmenterQualiteAvecBackStage(Item);
    }
  }

  diminuerQualiteSiExiste(Item) {
    if (Item.quality > 0) {
      this.diminuerQualite(Item);
    }
  }

  diminuerQualite(Item) {
    if (Item.name != 'Sulfuras, Hand of Ragnaros') {
      Item.quality = Item.quality - 1;
    }
  }

  augmenterQualiteAvecBackStage(Item) {
    if (Item.quality < 50) {
      Item.quality = Item.quality + 1;
      this.increaseQualiteBackStage(Item);
    }
  }

  increaseQualiteBackStage(Item) {
    if (Item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.augmenterQualiterSiPasExpiree(Item);
      this.augmenterQualiteSiProcheExpiration(Item);
    }
  }

  augmenterQualiteSiProcheExpiration(Item) {
    if (Item.sellIn < 6) {
      this.augmenterQualite(Item);
    }
  }

  augmenterQualiterSiPasExpiree(Item) {
    if (Item.sellIn < 11) {
      this.augmenterQualite(Item);

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
      this.gererItemExpireNotAgedBrie(Item);
    } else {
      this.augmenterQualite(Item);
    }
  }


  gererItemExpireNotAgedBrie(Item) {
    if (Item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      this.diminuerQualiteSiExiste(Item);
    } else {
      Item.quality = Item.quality - Item.quality;
    }
  }
}


module.exports = {
  Item,
  Shop
}
