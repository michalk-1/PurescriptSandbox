module GaussFactorialsProduct where

import Prelude
import Control.Alternative (guard)
import Data.Foldable (product,or)
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

-- 1. sieve
-- 2. 


-- nums :: Int -> List Int
-- nums n = sieve Nil (2 .. (ceil <<< sqrt <<< toNumber)(n - 1)) 10 Nil


-- mods :: Int -> List Int -> Boolean
mods a xs = or $ do
    x <- xs
    pure $ mod a x == 0


sieve :: List Int -> List Int -> Int -> List Int -> List Int

sieve ys (x:xs) n ms = 
    if mod n x == 0
    then sieve ys xs n (x:ms)
    else sieve ys xs n ms

sieve ys Nil n ms = do
    y <- ys
    guard $ mods y ms == false && mod 10 y /= 0
    pure y


gaussFactorial :: Int -> Int
gaussFactorial n = (product $ sieve (2..(n-1)) (2..(ceil <<< sqrt <<< toNumber)(n-1)) n Nil)


-- gaussFactorialProduct :: Int -> Int
gaussFactorialProduct n = product $ do
    x <- (1..n)
    pure $ toNumber $ gaussFactorial x
