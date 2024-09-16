namespace Csharptesthedgehog
{
    internal class Program
    {
        static void Main(string[] args)
        {
            AutoTest();
            while (true)
            {
                ManualTest();
            }
        }

        static void ManualTest()
        {
            Console.WriteLine(new string('=',60));
            int[] population = new int[3];

            for (int i = 0; i < 3; i++)
            {
                Console.Write($"Enter population value for color {i}: ");
                population[i] = int.Parse(Console.ReadLine());
            }

            Console.Write("Enter the target color index (0, 1, or 2): ");
            int color = int.Parse(Console.ReadLine());

            Console.WriteLine($"\tMinimum meets count = {MinMeetsCount(population, color)}");
        }


        static void AutoTest()
        {
            int[,] population = { { 6, 1, 9, 1 }, { 5, 5, 10, 3 }, { 3, 6, 12, 0 }, { 8, 8, 8, 2 }, { 9, 3, 6, 2 }, { 10, 1, 2, 1 }, { 2, 4, 6, 0 }, { 3, 0, 0, 2 } };

            for (int i = 0; i < population.GetLength(0); i++)
            {
                Console.WriteLine($"[{population[i, 0]}, {population[i, 1]}, {population[i, 2]}], target color = {population[i, 3]}\t" +
                    $" | Min meets count = {MinMeetsCount([population[i, 0], population[i, 1], population[i, 2]], population[i, 3])}");
            }
        }

        static int MinMeetsCount(int[] population, int color)
        {
            if (population.Where(x => x == 0).Count() >= 2)
                return -1;

            int secondaryColor1 = 0, secondaryColor2 = 0;
            switch (color)
            {
                case 0: secondaryColor1 = 1; secondaryColor2 = 2; break;
                case 1: secondaryColor1 = 0; secondaryColor2 = 2; break;
                case 2: secondaryColor1 = 0; secondaryColor2 = 1; break;
            }

            if (population[secondaryColor1] == population[secondaryColor2])
                return population[secondaryColor1];

            int secondaryGreater = secondaryColor1, secondarySmaller = secondaryColor2;

            if (population[secondaryGreater] < population[secondarySmaller])
                (secondaryGreater, secondarySmaller) = (secondarySmaller, secondaryGreater);

            int meetsCount = 0;
            int temp = population[secondarySmaller];
            population[secondarySmaller] = 0;
            population[secondaryGreater] -= temp;
            population[color] += temp * 2;
            meetsCount += temp;

            if (population[secondaryGreater] % 3 != 0 && population[color] >= 1)
                return -1;
            else
            {
                meetsCount += population[secondaryGreater];
            }
            return meetsCount;
        }
    }


}
