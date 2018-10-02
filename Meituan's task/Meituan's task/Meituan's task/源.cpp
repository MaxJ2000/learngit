#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int switchanswer(char answer);
int a_randomarray(void);
void StBrandlibrary(void);
void Printresult(int result);
int randomarray[52];
int main(void)
{
	char answer;
	int Banswer;
	printf("女士们先生们，欢迎来到澳门首家线上赌场（按下ENTER继续）\n");
	getchar();
	printf("这里是21点专区，话不多说，你想现在开始游戏么(输入y开始，q退出)");
	scanf("%c", &answer);
	Banswer=switchanswer(answer);
	if (Banswer == 0)
		return 0;
}
int switchanswer(char answer)
{
	switch (answer)
	{
	case 'Y':
	case 'y':
		printf("OK,Game start!");
		a_randomarray();
		return 1;
		break;
	case'n':
	case'N':
		printf("Not bad");
		a_randomarray();
		return 1;
		break;
	case'q':
	case'Q':
		printf("Bye~");
		return 0;
	default:
		printf("刚才风太大，我没听清，能再说一遍么otz(确认输入无误后Enter继续)");
		scanf_s("%c", &answer,10);
		switchanswer(answer);
		return 1;
	}
}
void StBrandlibrary()
{
	struct Brandlibrary
	{
		short color;
		short num;
		bool status;
	};
	enum Color
	{
		方片, 黑桃, 草花, 红桃
	}color;
	struct Brandlibrary card[52];
	int i;
	for(i=0;i<52;i++)
	{
		card[i].color = i % 4;
		card[i].num = (i + 1) % 13;
		card[i].status = false;
	}
	
}

int a_randomarray(void)
{
	srand(time(NULL));
	
}

