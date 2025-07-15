<?php

use Doctrine\Common\Cache\Psr6\InvalidArgument;

class Calculator{
    public function add($a,$b)
    {
        return $a + $b;
    }
    public function divide($a, $b)
    {
        if($b === 0)
        {
            throw new InvalidArgumentException
            ("Division par Zèro");
        }
        return $a / $b;
    }
    
}
?>