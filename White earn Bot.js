
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "White earn Bot",-1,1, "top" )
	txt.SetTextSize( 22 )
	txt.SetTextColor( "green" )
	txt.SetMargins( 0,0.2)
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
}