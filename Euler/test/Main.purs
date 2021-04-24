module Test.Main where

import Data.Foldable (sum)
import Data.Int (pow)
import Data.List ((..), (:), List(Nil))
import Effect (Effect)
import Effect.Class.Console (log)
import Prelude (Unit, discard, show, ($), (==), (<<<))
import Test.Assert (assert)

import GaussFactorialsProduct


main :: Effect Unit
main = do
  assert $ (mods 4 (3:2:Nil)) == true
  assert $ (mods 5 (3:2:Nil)) == false
  assert $ sieveMods (2..9) 10 == (5:2:Nil)
  assert $ sum (1..(pow 10 4)) == 50005000
  assert $ gaussFactorial 10 == 189
  log <<< show <<< gaussFactorials $ 10