module Test.Main where

import GaussFactorialsProduct as GFP
import Sieve (sieve)
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
  suite "GaussFactorialsProduct" do
    test "mods" do
      Assert.equal true $ GFP.mods 4 (3:2:Nil)
      Assert.equal false $ GFP.mods 5 (3:2:Nil)
    test "collectMods" do
      Assert.equal (5:2:Nil) $ GFP.collectMods (2..9) 10
    test "gaussFactorial" do
      Assert.equal 189 $ GFP.gaussFactorial 10
    test "sandbox" do
      Assert.equal 50005000 $ sum (1..(pow 10 4))
    test "calculationsProduct" do
      Assert.equal 1668595712 $ GFP.calculationsProduct identity GFP.gaussFactorial 9
      Assert.equal 23044331520000.0 $ GFP.calculationsProduct toNumber GFP.gaussFactorial 10
    test "moduloProduct" do
      Assert.equal 100 $ GFP.moduloProduct 101 [2, 2, 5, 5]
      Assert.equal 0 $ GFP.moduloProduct 100 [2, 2, 5, 5]
      Assert.equal 1 $ GFP.moduloProduct 99 [2, 2, 5, 5]
      Assert.equal 9 $ GFP.moduloProduct 13 [2, 2, 5, 5]
  suite "Sieve" do
    test "sieve" do
      Assert.equal true $ sieve