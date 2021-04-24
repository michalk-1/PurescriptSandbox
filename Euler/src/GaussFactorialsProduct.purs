module GaussFactorialsProduct where

import Prelude
import Control.Alternative (guard)
import Data.Foldable (product,or,foldl)
import Data.List ((..), (:), List(Nil))
import Data.List
import Math (sqrt)
import Data.Int (ceil,toNumber)
-- Two integers are relatively prime if they share no common positive
-- factors (divisors) except 1.

-- The Gauss Factorial of a number $n$ is defined as the product of all
-- positive numbers $\leq n$ that are relatively prime to $n$.

-- For example $g(10)=1\times 3\times 7\times 9 = 189$.

-- Also we define $G(n)=\prod_{i=1}^{n}g(i)$

-- You are given $G(10)=23044331520000$.

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


sieveMods :: List Int -> Int -> List Int
sieveMods xs n = foldl
    (\xs x -> if mod n x == 0 then (x:xs) else xs)
    Nil xs


gaussFactorial :: Int -> Int
gaussFactorial n = product $ sieve
    (2..(n-1))
    n
    (sieveMods (2..(ceil <<< sqrt <<< toNumber)(n-1)) n)


-- gaussFactorialProduct :: Int -> Int
-- gaussFactorialProduct n = product $ do
    -- x <- (1..n)
    -- pure $ gaussFactorial x
