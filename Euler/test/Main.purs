module Test.Main where

import Data.Foldable (sum)
import Data.Int (pow)
import Data.List ((..), (:), List(Nil))
import Effect (Effect)
import Effect.Class.Console (log)
import Prelude
import Test.Unit (suite, test, timeout)
import Test.Unit.Main (runTest)
import Test.Unit.Assert as Assert

import GaussFactorialsProduct


main :: Effect Unit
main = runTest $ do
  suite "euler" do
    test "mods" do
      Assert.equal true $ mods 4 (3:2:Nil)
      Assert.equal false $ mods 5 (3:2:Nil)
    test "sieveModes" do
      Assert.equal (5:2:Nil) $ sieveMods (2..9) 10
    test "gaussFactorial" do
      Assert.equal 50005000 $ sum (1..(pow 10 4))
      Assert.equal 189 $ gaussFactorial 10
    test "gaussFactorials" do
      Assert.equal 1668595712 $ gaussFactorials 9