import unittest
from prueba import ValidarUser

class TestProbar(unittest.TestCase):
    def test_ValidarUsuario(self):
        self.assertAlmostEqual(ValidarUser(user),User)