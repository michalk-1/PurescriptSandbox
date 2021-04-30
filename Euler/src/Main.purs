module Main where

import GaussFactorialsProduct
import Data.Foldable (sum)
import Data.Int (pow,toNumber)
import Data.List ((..), (:), List(Nil))
import Prelude (identity, Unit, ($), discard, show)
import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = do
  -- pow 10 4 - stack exceeded
  log $ show $ calculationsProduct toNumber productFrom2 (pow 10 3)
  -- pow 10 8 - memory exceeded
  log $ show $ productFrom2 (pow 10 7)
  -- the target is to compute G(10^8) % (10^9 + 7)
  log $ show $ calculationsProduct toNumber gaussFactorial 18
  -- higher numbers exceed the IEEE float32 range of 2^127
  log $ show $ calculationsProduct toNumber gaussFactorial (pow 10 3)
  -- 10^4 exceeds maximum callstack after 45 seconds
