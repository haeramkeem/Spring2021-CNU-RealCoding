import org.junit.Test;

import static  org.junit.Assert.*;

public class CustomCalculatorTest {
    private  CustomCalculator customCalculator;

    //더하기 테스트를 진행합니다.
    @Test
    public void addTest(){
        customCalculator = new CustomCalculator();
        int result = customCalculator.add(10, 10);
        /* 텍스트 코드 입력*/
        //assertTrue(result == 20);
        assertFalse(result == 19);
    }
    @Test
    public void subTest(){
        customCalculator = new CustomCalculator();
        int result = customCalculator.subtract(10, 3);
        /* 텍스트 코드 입력*/
        assertTrue(result == 7);
    }
    @Test
    public void muliplyTest(){
        customCalculator = new CustomCalculator();
        int result = customCalculator.multiply(10, 3);
        /* 텍스트 코드 입력*/
        assertTrue(result == 30);
    }
    @Test
    public void divideTest(){
        customCalculator = new CustomCalculator();
        int result = customCalculator.divide(10, 2);
        /* 텍스트 코드 입력*/
        assertTrue(result == 5);
    }

}