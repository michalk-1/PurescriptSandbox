module GaussFactorialsProduct where

import Prelude
import Control.Alternative (guard)
import Data.Foldable (product,or,foldl,foldr)
import Data.List ((..), (:), List(Nil), (!!))
import Math (sqrt)
import Data.Int (ceil,toNumber)
-- Two integers are relatively prime if they share no common positive
-- factors (divisors) except 1.

-- The Gauss Factorial of a number $n$ is defined as the product of all
-- positive numbers $\leq n$ that are relatively prime to $n$.

-- For example $g(10)=1\times 3\times 7\times 9 = 189$.

-- Also we define $G(n)=\prod_{i=1}^{n}g(i)$

-- You are given $G(10)=
--        23,044,331,520,000             ~~ 2*10^13
--             2,147,483,647 -- 2^31 - 1 ~~ 2*10^9
-- 9,223,372,036,854,775,807 -- 2^63 - 1 ~~ 9*10^18

-- Find $G(10^8)$. Give your answer modulo $1\,000\,000\,007$.
-- 32-bit two's complement max intege       2  147  483  647.


mods a xs = or $ do
    x <- xs
    pure $ mod a x == 0


sieve :: List Int -> Int -> List Int -> List Int
sieve ys n ms = do
    y <- ys
    guard $ not (mods y ms) && mod 10 y /= 0
    pure y


collectMods :: Int -> (List Int -> Int -> List Int)
collectMods n xs x =
    case mod n x of
        0 -> (x:xs)
        _ -> xs


sieveMods :: List Int -> Int -> List Int
sieveMods xs n = foldl (collectMods n) Nil xs


gaussFactorial :: Int -> Int
gaussFactorial n = product $ sieve
    (2..(n-1))
    n
    (sieveMods (2..(ceil <<< sqrt <<< toNumber)(n-1)) n)


gaussFactorials :: Int -> Int
gaussFactorials n = product $ do
    x <- (1..n)
    pure $ gaussFactorial x