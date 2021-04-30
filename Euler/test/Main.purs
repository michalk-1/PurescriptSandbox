module Test.Main where

import GaussFactorialsProduct
import Data.Foldable (sum)
import Data.Int (pow,toNumber)
import Data.List ((..), (:), List(Nil))
import Effect (Effect)
import Effect.Class.Console (log)
import Prelude (identity, Unit, ($), discard)
import Test.Unit (suite, test, timeout)
import Test.Unit.Main (runTest)
import Test.Unit.Assert as Assert



main :: Effect Unit
main = runTest $ do
  suite "euler" do
    test "mods" do
      Assert.equal true $ mods 4 (3:2:Nil)
      Assert.equal false $ mods 5 (3:2:Nil)
    test "collectMods" do
      Assert.equal (5:2:Nil) $ collectMods (2..9) 10
    test "gaussFactorial" do
      Assert.equal 189 $ gaussFactorial 10
    test "sandbox" do
      Assert.equal 50005000 $ sum (1..(pow 10 4))
    test "calculationsProduct" do
      Assert.equal 1668595712 $ calculationsProduct identity gaussFactorial 9
      Assert.equal 23044331520000.0 $ calculationsProduct toNumber gaussFactorial 10