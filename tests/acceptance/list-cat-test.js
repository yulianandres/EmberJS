import { test } from 'qunit';
import moduleForAcceptance from 'cats/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list cat');

test('should redirect to cats route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/cats', 'should redirect automatically');
  });
});

test('should list available cats.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
