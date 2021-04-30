module Main where

import GaussFactorialsProduct
import Data.Foldable (sum)
import Data.Int (pow,toNumber)
import Data.List ((..), (:), List(Nil))
import Prelude (identity, Unit, ($), discard, show)
import Effect (Effect)
import Effect.Console (log)

-- Compute G(10^8) % (10^9 + 7)
main :: Effect Unit
main = do
  -- pow 10 5 - takes 65 s
  log $ show $ calculationsProduct identity productFrom2 (pow 10 4)
  -- pow 10 4 - takes 140 s
  log $ show $ calculationsProduct identity gaussFactorial (pow 10 3)
  -- takes 6 s
  log $ show $ productFrom2 (pow 10 8)
