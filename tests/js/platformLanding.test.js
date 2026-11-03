import test from 'node:test';
import assert from 'node:assert/strict';
import { landingNavigation } from '../../resources/js/Utils/platformLanding.js';

test('landing directs guests to registration and manager login without selecting a shop', () => {
    assert.deepEqual(landingNavigation(null), { href: '/login', label: 'Masuk pengelola', primaryHref: '/register', primaryLabel: 'Buat toko' });
    assert.equal(landingNavigation({ user: null }).primaryHref, '/register');
});

test('signed-in users get an accessible role destination instead of guest registration', () => {
    for (const [roles, expected] of [[['owner'], '/dashboard'], [['cashier'], '/pos'], [['cashier', 'owner'], '/dashboard'], [[], '/profile']]) {
        const result = landingNavigation({ user: { id: 'example' }, roles });
        assert.equal(result.href, expected);
        assert.equal(result.primaryHref, expected);
    }
});
