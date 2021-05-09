module Main where

import GaussFactorialsProduct
import Data.Foldable (sum)
import Data.Int (pow,toNumber,fromString)
import Data.List ((..), (:), List(Nil), drop, fromFoldable, head)
import Data.Maybe (fromMaybe)
import Effect (Effect)
import Effect.Console (log)
import Prelude (identity, Unit, ($), discard, show, bind)

foreign import argv :: Array String

args :: List String
args = drop 2 $ fromFoldable argv

argInt :: Int
argInt = fromMaybe 3 $ do
  argString <- head args
  fromString argString


-- spago bundle-app -t bin/output.js
--
-- time node bin/output.js 3 \
-- && time node bin/output.js 4 \
-- && time node bin/output.js 5 \
-- && time node bin/output.js 6 \
-- && time node bin/output.js 7 \
-- && time node bin/output.js 8

-- Compute G(10^8) % (1000000007)
main :: Effect Unit
main = do
  -- pow 10 7 - takes 4 s and equals to 388114695
  -- pow 10 8 - takes 15 s and equals to 29035790
  log $ show $ applyFrom2 (moduloProduct 1000000007) (pow 10 6)
  -- pow 10 3 - takes   1 s   and equals to 360039694
  -- pow 10 4 - takes  76 s   and equals to 272693801
  -- pow 10 5 - takes 126 min and equals to 0 (todo: fix moduloProduct)
  -- pow 10 6 - took  275 min and did not finish
  log $ show $ calculationsApplication
    (moduloProduct 1000000007)
    identity
    (gaussApplication (moduloProduct 1000000007))
    (pow 10 3)
  --
  log $ show $ gaussApplication
    (moduloProduct 1000000007)
    (pow 10 argInt)
