module GaussFactorialsProduct where

import Prelude
import Data.EuclideanRing (class EuclideanRing)
import Control.Alternative (guard)
import Data.Foldable (product,or,foldl,foldr,class Foldable)
import Data.Array (range)
import Data.Traversable (class Traversable)
import Data.List (List(Nil), (:), (..))
import Math (sqrt)
import Data.Int (ceil,toNumber,fromNumber)
import Control.Monad (class Monad)
import Control.MonadPlus (class MonadPlus)
import Data.Ord (class Ord)
-- Two integers are relatively prime if they share no common positive
-- factors (divisors) except 1.

-- The Gauss Factorial of a number $n$ is defined as the product of all
-- positive numbers $\leq n$ that are relatively prime to $n$.

-- For example $g(10)=1\times 3\times 7\times 9 = 189$.

-- Also we define $G(n)=\prod_{i=1}^{n}g(i)$

-- You are given $G(10)=
--        23,044,331,52.,...
--        23,044,331,520,000
--        23,044,331,520,000             ~~ 2*10^13
--             1,668,595,712
--             2,304,433,152
--             2,147,483,647 -- 2^31 - 1 ~~ 2*10^9
-- 9,223,372,036,854,775,807 -- 2^63 - 1 ~~ 9*10^18
-- Find $G(10^8)$. Give your answer modulo  1 000 000 007
-- 32-bit two's complement max integer      2 147 483 647

collectMods :: forall f . Foldable f => f Int -> Int -> List Int
collectMods xs n = foldl f Nil xs
    where
      f xs x | mod n x == 0 = (x:xs)
      f xs _ = xs

mods :: forall m . Traversable m => Int -> m Int -> Boolean
mods a xs = or $ map (\x -> mod a x == 0) xs

toRemove :: forall m . Traversable m => Int -> Int -> m Int -> Boolean
toRemove x n ms = mods x ms || mod n x == 0

sieve :: forall m t. MonadPlus m => Traversable t => m Int -> Int -> t Int -> m Int
sieve xs n ms = do
    x <- xs
    guard $ not $ toRemove x n ms
    pure x

applyFrom2 :: (Array Int -> Int) -> Int -> Int
applyFrom2 apply n = apply $ range 2 n

productFrom2 :: Int -> Int
productFrom2 n = applyFrom2 product n

gaussApplication :: (Array Int -> Int) -> Int -> Int
gaussApplication apply n = apply $ sieve
    (range 2 (n-1))
    n
    (collectMods (2..(ceil <<< sqrt <<< toNumber)(n-1)) n)

gaussFactorial :: Int -> Int
gaussFactorial n = gaussApplication product n


calculationsApplication :: forall a. EuclideanRing a =>
    (Array a -> a) -> (Int -> a) -> (Int -> Int) -> Int -> a

calculationsApplication apply convert calculation n =
    apply $ map (convert <<< calculation) (range 2 n)


calculationsProduct :: forall a. EuclideanRing a => (Int -> a) -> (Int -> Int) -> Int -> a
calculationsProduct convert calculation n =
    calculationsApplication product convert calculation n


-- (moduloProduct 1000000007)
moduloProduct :: forall f a. Traversable f => Ord a => EuclideanRing a => a -> f a -> a
moduloProduct n xs = foldl fn one xs
    where fn a x = ((a `mod` n) * (x `mod` n)) `mod` n
