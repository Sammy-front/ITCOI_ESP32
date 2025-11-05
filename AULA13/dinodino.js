const BT = 19;

function obj_dino ()
{
	const self = this;

	self.x = 5;
	self.y = 38;

	self.open  = 0;
	self.close = 1;
	self.left  = 2;
	self.right = 3;
	self.died  = 4; 

	self.frame =
	[
		{
			width : 20, height : 22, bpp : 1, transparent: 0,
			buffer : atob("AB/gA38AN/AD/wA/8AP/AD4AA/yAfAgPwMP/Dn/Q//wP/8B//AP/gB/wAP4AB2AAYgAEIABjAA==")
		},
		{
			width : 20, height : 22, bpp : 1, transparent: 0,
			buffer : atob("AB/gA/8AP/AD/wA/8APgAD/AA8CAfAgf8MP9Dn/A//wP/8B/+AP/gB/wAP4AB2AAYgAEIABjAA==")
		},
		{
			width : 20, height : 22, bpp : 1, transparent: 0,
			buffer : atob("AB/gA38AN/AD/wA/8APgAD/AA8CAfAgf8MP9Dn/A//wP/8B/+AP/gB/wAP4ABzAAYAAEAABgAA==")
		},
		{
			width : 20, height : 22, bpp : 1, transparent: 0,
			buffer : atob("AB/gA38AN/AD/wA/8APgAD/AA8CAfAgf8MP9Dn/A//wP/8B/+AP/gB/wAP4ABmAAMgAAIAADAA==")
		},
		{
			width : 20, height : 22, bpp : 1, transparent: 0,
			buffer : atob("AB/gAx8ANfADHwA/8AP/AD/AA8CAfAgf8MP9Dn/A//wP/8B/+AP/gB/wAP4ABmAAQgAEIABjAA==")
		}
	];

	self.run_pic = self.open;
	
	self.jump_move = 0;
	self.jump_delay = 0;

	self.run = function()
	{
		if (self.jump_move == 0 && self.run_pic < self.died)
			self.run_pic = (self.run_pic + 1) % self.died;
		else
			self.jump();
	}
		
	self.jump = function()
	{
		if (self.jump_move == 0)
		{
			self.jump_move = 1;
		}
		if (self.jump_move == 1)
		{
			self.run_pic = self.open;
			
			if (self.y > 8)
			{
				self.y -= 5;
			}
			else
			{
				self.jump_move = 2;
				self.jump_delay = 0;
			}
		}
		else if (self.jump_move == 2)
		{
			if (self.jump_delay < 5)
			{
				++self.jump_delay;
			}
			else
			{
				self.jump_move = 3;
			}
		}
		else if (self.jump_move == 3)
		{
			if (self.y < 38)
			{
				self.y += 5;
			}
			else
			{
				self.jump_move = 0;
			}
		}	
	}

	self.dead = function()
	{
		self.run_pic = self.died;
	}

	self.show = function(oled)
	{
		if (oled)
			oled.drawImage(self.frame[self.run_pic], self.x, self.y);
	}
}

function obj_cloud ()
{
	const self = this;
	const x_reset = 150;

	self.x = 100;
	self.y = 5;

	self.frame =
	[
		{
			width : 23, height : 8, bpp : 1, transparent: 0,
			buffer : atob("AAwAAOQAAgQABA+A8AGGAACQAAD///8=")
		}
	];

	self.run = function()
	{
		if (self.x < -self.frame[0].width)
			self.x = x_reset;
		else
			--self.x;
	}

	self.show = function(oled)
	{
		if (oled)
			oled.drawImage(self.frame[0], self.x, self.y);
	}
}

function obj_cactus ()
{
	const self = this;
	const x_reset = 130;
	
	self.x = 130;
	self.y = 36;

	self.one   = 0;
	self.two   = 1;
	self.three = 2;

	self.frame =
	[
		{
			width : 12, height : 24, bpp : 1, transparent: 0,
			buffer : atob("BgDwDwDwDwDyTzzzzzzzzzzzzz73/+fwDwDwDwDwDwDwDwDw")
		},
		{
			width : 26, height : 24, bpp : 1, transparent: 0,
			buffer : atob("BgAYA8APAPADwDwE8A8DPAPIzyTzM888zPPPMzzzzM888zvPPM/zzzH8+9wPP/4D+fwA8A8APAPADwDwA8A8APAPADwDwA8A8APAPADw")
		},
		{
			width : 26, height : 24, bpp : 1, transparent: 0,
			buffer : atob("AAAABgMBgYDAYGAwGBkMhkZDIZGQyGRkMhmZTKZn0+n5hMJiYTCYmEwmJhMJiYTCY+Hw+Hg8HgYDAYGAwGBgMBgYDAYGAwGBgMBgYDAY")
		}
	];

	self.run_pic = -1;

	self.run = function()
	{
		if (self.run_pic == -1)
		{
			self.run_pic = Math.floor(self.frame.length * Math.random());
		}
		else
		{
			if (self.x > -self.frame[self.run_pic].width)
			{
				self.x -= 4;
			}
			else
			{
				self.x = x_reset;
				self.run_pic = -1;
			}
		}
	}

	self.show = function(oled)
	{
		if (oled)
			if (self.run_pic >= 0)
				oled.drawImage(self.frame[self.run_pic], self.x, self.y);
	}
};

function obj_gameover ()
{
	const self = this;
	
	self.x = 0;
	self.y = 20;

	self.frame =
	[
		{
			width : 128, height : 15, bpp : 1, transparent: 0,
			buffer : atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AOADGAP4AAH4AYwB/AH5gAGwA7gDAAADDAGMAYABjwADGAP4AwAAAwwBjAGAAY84AxgD+APwAAMMAdwB+AGfGAP4A1gDAAADDAD4AYAB8ZgDGAMYAwAAAwwAcAGAAbj4AxgDGAP4AAH4ACAB/AGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
		}
	];

	self.show = function(oled)
	{
		if (oled)
			oled.drawImage(self.frame[0], self.x, self.y);
	}
}

function checkCollision (obj_1_x, obj_1_y, obj_1_w, obj_1_h, obj_2_x, obj_2_y, obj_2_w, obj_2_h)
{
	if((obj_1_x - 2 > obj_2_x && obj_1_x < obj_2_x + obj_2_w || obj_1_x + obj_1_w - 3 > obj_2_x && obj_1_x + obj_1_w < obj_2_x + obj_2_w) && 
       (obj_1_y + obj_1_h - 6 >= obj_2_y && obj_1_y + obj_1_h <= obj_2_y + obj_2_h))
	   return true;
	else
		return false;
}

function start ()
{
	const self = this;

	self._dino = new obj_dino();
	self._cloud = new obj_cloud();
	self._cactus = new obj_cactus();
	self._gameover = new obj_gameover();
	self.score = getTime();

	setInterval(function()
	{
		if (self._dino.run_pic != self._dino.died)
		{
			if (digitalRead(BT) == 0 && self._dino.jump_move == 0)
				self._dino.jump();

			self._dino.run();
			self._cloud.run();
			self._cactus.run();

			if (self._cactus.run_pic >= self._cactus.one)
			{
				if (checkCollision(self._dino.x,   self._dino.y,   self._dino.frame[self._dino.run_pic].width,     self._dino.frame[self._dino.run_pic].height,
								   self._cactus.x, self._cactus.y, self._cactus.frame[self._cactus.run_pic].width, self._cactus.frame[self._cactus.run_pic].height))
				{
					self._dino.dead();
				}
			}
		}
		else
		{
			clearInterval();
			setTimeout(start, 3000);
		}

		oled.clear();

		self._cloud.show(oled);
		self._cactus.show(oled);
		self._dino.show(oled);
		
		if (self._dino.run_pic == self._dino.died)
			self._gameover.show(oled);
		
		oled.drawString("Score: " + ((getTime() - self.score)*10).toFixed(0), 5, 5);

		oled.flip();
	}, 10);
}

I2C1.setup({bitrate: 1000000});
let oled = require("SSD1306").connect(I2C1);
oled.setFont("4x6");
pinMode(BT, "input_pullup");

start();