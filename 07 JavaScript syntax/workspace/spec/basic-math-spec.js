/* global casper */

/* Before running these acceptance tests make sure your web app is running then paste in its URL below.*/
const url = 'https://covcom-marktyers.c9users.io/07 JavaScript syntax/workspace/basic_math.html';

casper.test.begin('can multiply quantity and price', 4, function suite(test) {
  
  casper.start(url, function() {
    test.assertVisible('fieldset', 'form is visible');
    test.assertExists('fieldset > p', 'form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'form title text is correct');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '50.00', 'total is correct');
  });


  casper.run(function() {
    casper.capture('basic-math-1.png');
    test.done();
  });
});

casper.test.begin('can apply a sales tax', 1, function suite(test) {
  
  casper.start(url, function() {
    test.assertVisible('fieldset', 'form is visible');
    test.assertExists('fieldset > p', 'form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'form title text is correct');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '60.00', 'total is correct');
  });
  
  casper.run(function() {
    test.done();
  });

});

casper.test.begin('can apply a discount', 1, function suite(test) {
  
  casper.start(url, function() {
    test.assertVisible('fieldset', 'form is visible');
    test.assertExists('fieldset > p', 'form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'form title text is correct');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20',
        'discount': '25'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '35.00', 'total is correct');
  });


  casper.run(function() {
    test.done();
  });
});

casper.test.begin('double discount if qty greater than 100', 1, function suite(test) {
  
  casper.start(url, function() {
    test.assertVisible('fieldset', 'form is visible');
    test.assertExists('fieldset > p', 'form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'form title text is correct');
    this.fill('form#theForm', {
        'quantity': '101',
        'price': '5',
        'tax': '20',
        'discount': '25'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '556.00', 'total is correct');
  });


  casper.run(function() {
    test.done();
  });
});

casper.test.begin('can add the shipping fee', 1, function suite(test) {
  
  casper.start(url, function() {
    test.assertVisible('fieldset', 'form is visible');
    test.assertExists('fieldset > p', 'form title is present');
    test.assertSelectorHasText('fieldset > p', 'Calculate a bulk book order.', 'form title text is correct');
    this.fill('form#theForm', {
        'quantity': '10',
        'price': '5',
        'tax': '20',
        'discount': '25',
        'shipping': '20'
    });
  });

  casper.thenClick('input#submit', function() {
    var total = this.getFormValues('#theForm').total;
    casper.test.assertEquals(total, '55.00', 'total is correct');
  });
  
  casper.run(function() {
    test.done();
  });

});