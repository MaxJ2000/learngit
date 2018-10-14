#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void chooseAnswer(char answer);
int getPoker(int poker[][52]);
void intPoker(int poker[][52]);
void displayPoker(int poker[][52],int playerPokernum,char PorM);
int displaySum(int poker[][52], int playerPokernum, char PorM,int sum);
void boom(char who);
int main(void)
{
	srand((unsigned)time(NULL));
	char answer;
	int poker[3][52];
	int playerPokernum=0;
	int makerPokernum=0;
	int playerPokersum = 0;
	int makerPokersum = 0;
	char wantContinue;
	intPoker(poker);
	printf("女士们先生们，欢迎来到澳门首家线上赌场\n");
	printf("这里是21点专区，话不多说，你想现在开始游戏么(输入y开始，q退出)");
	scanf("%c", &answer);
	while(getchar()!='\n')
		continue;
	chooseAnswer(answer);
		do {
			playerPokernum = getPoker(poker);
			displayPoker(poker, playerPokernum, 'P');
			playerPokersum = displaySum(poker, playerPokernum, 'P', playerPokersum);
			if (playerPokersum > makerPokersum || makerPokersum < 17) 
			{
				makerPokernum = getPoker(poker);
				displayPoker(poker, makerPokernum, 'M');
				makerPokersum = displaySum(poker, makerPokernum, 'M', makerPokersum);
			}
			if (playerPokersum > 21)
				boom('P');
			if (makerPokersum > 21)
				boom('M');
			printf("你想要继续抽牌么(y/n)");
			scanf("%c", &wantContinue);
			while (getchar() != '\n')
				continue;
		} while (wantContinue == 'y');
		while (makerPokersum<=playerPokersum)
		{
			makerPokernum = getPoker(poker);
			displayPoker(poker, makerPokernum, 'M');
			makerPokersum = displaySum(poker, makerPokernum, 'M', makerPokersum);
			if (makerPokersum > 21)boom('M');
		}
	if (playerPokersum > makerPokersum)
		boom('M');
	if (playerPokersum < makerPokersum)
		boom('P');
	if (playerPokersum ==makerPokersum)
		printf("woc你们居然平局了2333");

	return 0;
}
void chooseAnswer(char answer)
{
	int answerWrong;
	do
		switch (answer)
		{
		case 'Y':
		case 'y':
			printf("OK,Game start!\n");
			answerWrong = 1;
			break;
		case'n':
		case'N':
			printf("Not bad");
			exit(0);
		case'q':
		case'Q':
			printf("Bye~");
			exit(0);
		default:
			printf("刚才风太大，我没听清，能再说一遍么otz(确认输入无误后Enter继续)");
			scanf("%c", &answer);
			answerWrong = 0;
			break;
		}while (answerWrong == 0);
}

void intPoker(int poker[][52])
{
	for(int i=0;i<52;i++)
	{
		poker[0][i] = i%13+1;
		poker[1][i] = i / 13 + 1;
		poker[2][i] = 1;
	}
}
int getPoker(int poker[][52])
{
	int randnum;
	
	randnum = rand() % 52;
	if (poker[2][randnum] != 0)
	{
		poker[2][randnum] = 0;
	}
	return  randnum;
}
void displayPoker(int poker[][52], int playerPokernum, char PorM)
{
	if (PorM=='P')
	{
		printf("你抽到牌是");
		
	}
	if (PorM == 'M')
	{
		printf("庄家抽到的牌是");
	}
	if (poker[1][playerPokernum] == 1) { printf("草花"); }
	if (poker[1][playerPokernum] == 2) { printf("黑桃"); }
	if (poker[1][playerPokernum] == 3) { printf("方片"); }
	if (poker[1][playerPokernum] == 4) { printf("红桃"); }
	if (poker[0][playerPokernum] == 1) { printf("A"); }
	if (poker[0][playerPokernum] == 2) { printf("2"); }
	if (poker[0][playerPokernum] == 3) { printf("3"); }
	if (poker[0][playerPokernum] == 4) { printf("4"); }
	if (poker[0][playerPokernum] == 5) { printf("5"); }
	if (poker[0][playerPokernum] == 6) { printf("6"); }
	if (poker[0][playerPokernum] == 7) { printf("7"); }
	if (poker[0][playerPokernum] == 8) { printf("8"); }
	if (poker[0][playerPokernum] == 9) { printf("9"); }
	if (poker[0][playerPokernum] == 10) { printf("10"); }
	if (poker[0][playerPokernum] == 11) { printf("J"); }
	if (poker[0][playerPokernum] == 12) { printf("Q"); }
	if (poker[0][playerPokernum] == 13) { printf("K"); }
	printf("\n");
}
int displaySum(int poker[][52], int playerPokernum, char PorM,int sum)
{
	if (poker[0][playerPokernum] > 10)
		sum += 10;
	else
		sum += poker[0][playerPokernum];
	if (PorM == 'P')
	{
		printf("你的分数是%d",sum);

	}
	if (PorM == 'M')
	{
		printf("庄家的分数是%d", sum);
	}
	printf("\n");
	return sum;
}
void boom(char who)
{
	if (who=='P')
	{
		printf("你输了，游戏结束");
		getchar();
		exit(0);
	}
	if (who=='M')
	{
		printf("你打败了庄家，恭喜！");
		getchar();
		exit(0);
	}
}