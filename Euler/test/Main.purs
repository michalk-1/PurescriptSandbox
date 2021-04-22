module Test.Main where

import Prelude

import Effect (Effect)
import Effect.Class.Console (log)

import GaussFactorialsProduct
import Control.Alternative (guard)
import Data.List ((..), (:), List(Nil))
import Test.Assert (assert)
import Data.Int (pow)

main :: Effect Unit
main = do
  assert $ (mods 4 (3:2:Nil)) == true
  assert $ (mods 5 (3:2:Nil)) == false
  -- log $ show $ gaussFactorial 10
  log $ show $ gaussFactorialProduct $ (pow 10 3)