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
  -- the target is to compute G(10^8) % (10^9 + 7)
  log $ show $ gaussFactorials toNumber 18
  -- higher numbers exceed the IEEE float32 range of 2^127
  log $ show $ gaussFactorials toNumber (pow 10 3)
  -- 10^4 exceeds maximum callstack after 45 seconds
